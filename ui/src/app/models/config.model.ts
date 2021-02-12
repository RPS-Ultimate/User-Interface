export interface Config {
  api: {
    fems: {
      base: string,
      uri: {
        posts: string,
        comments: string,
        image: string
      }
    },
    auth: {
      base: string,
      uri: {
        login: string,
        register: string
      }
    }
  }
}
