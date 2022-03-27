import { gql } from "graphql-tag"

export const GET_PAST_LAUNCHES_INFO = gql`
query pastLaunchesList {
    launchesPast(limit: 10) {
    mission_name
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
    }
    launch_date_local
    launch_success
    details
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

