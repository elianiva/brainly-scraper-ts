import axios, { AxiosRequestConfig } from "axios"

interface Answer {
  text: string
  attachments: string[]
}

interface Result {
  question: string
  attachments: string[]
  answers: Answer[]
}

interface FinalResult {
  status: string
  total: number
  result: Result[]
}

/**
 * Class that only contain one function to get data from brainly site
 */
export default class Brainly {
  /**
   * Static function to get data from brainly site with the provided keyword and limit
   * @param {string} query Keyword that is used to get data from brainly
   * @param {limit} limit Data limit that is returned, default to 10
   * @return {Promise<FinalResult>} Object with property of status, counts, and data
   */
  static async getData(
    query: string,
    limit: number = 10
  ): Promise<FinalResult> {
    const graphqlQuery: string = `query SearchQuery($query: String!, $first: Int!, $after: ID) {
  questionSearch(query: $query, first: $first, after: $after) {
    edges {
      node {
        content
        attachments{
          url
        }
        answers {
          nodes {
            content
            attachments{
              url
            }
          }
        }
      }
    }
  }
}`

    const config: AxiosRequestConfig = {
      url: "https://brainly.com/graphql/id",
      method: "POST",
      headers: {
        host: "brainly.com",
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent":
          "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0"
      },
      data: {
        operationName: "SearchQuery",
        variables: {
          query: query,
          after: null,
          first: limit
        },
        query: graphqlQuery
      }
    }

    try {
      const response = await axios.request(config)
      const { edges } = await response.data.data.questionSearch
      const results: Result[] = edges.map((edge: any) => ({
        question: edge.node.content,
        attachments: edge.node.attachments,
        answers: edge.node.answers.nodes.map((node: any) => ({
          text: node.content
            .replace(/(<br\ \/>)/, "\n")
            .replace(/(<([^>]+)>)/gi, ""),
          attachments: node.attachments
        }))
      }))

      return new Promise(resolve =>
        resolve({
          status: "Success",
          total: results.length,
          result: results
        })
      )
    } catch (err) {
      return new Promise((_, reject) => {
        reject(err)
      })
    }
  }
}
