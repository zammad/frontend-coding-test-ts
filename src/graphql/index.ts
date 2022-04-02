import { gql } from "graphql-tag"

export const GET_PAST_LAUNCHES_INFO = gql`
query pastLaunchesList {
  launchesPast(limit: 10) {
    mission_name
    links {
      flickr_images
    }
    launch_success
    id
    launch_year
  }
}
`

export const GET_LAUNCHES_DETAILS = gql`
    query launchDetails($id: ID!) {
  launch(id: $id) {
    links {
      flickr_images
      article_link
      video_link
    }
    launch_success
    launch_site {
      site_name_long
    }
    launch_date_local
    rocket {
      rocket_name
      rocket {
        active
        description
      }
    }
    details
    mission_name
  }
}
`

