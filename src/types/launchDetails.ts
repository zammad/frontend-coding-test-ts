export interface LaunchDetails {
    links: {
        flickr_images: string[]
        article_link: string | undefined
        video_link: string | undefined
      }
      launch_success: Boolean
      launch_site: {
        site_name_long: string
      }
      launch_date_local: string
      rocket: {
        rocket_name: string
        rocket: {
          active: Boolean
          description: string
        }
      }
      details: string
      mission_name: string
}