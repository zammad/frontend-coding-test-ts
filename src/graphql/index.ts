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

export const GET_LAUNCHES_QUERY = gql`
    query launchDetails($id: ID!) {
  launch(id: $id) {
    id
    mission_name
    details
    links {
      flickr_images
      mission_patch
    }
  }
}
`

