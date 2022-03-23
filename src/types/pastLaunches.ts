export interface PastLaunches {
    mission_name: string
    launch_site: {
      site_name_long: string
    }
    links: {
      article_link: string | null
      video_link: string | null
      flickr_images: []
    }
    launch_date_local: string
    launch_success: boolean
    details: string | null
}