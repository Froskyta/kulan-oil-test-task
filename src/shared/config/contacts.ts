import InstagramIcon from '@media/icons/instagram.svg'
import YouTubeIcon from '@media/icons/youtube.svg'
import FacebookIcon from '@media/icons/facebook.svg'

export type ContactT = {
    link: string
    title?: string
    icon?: any
}


export const emailData:ContactT = {
    title: 'info@exline.kz',
    link: 'info@exline.kz'
}

export const phoneData: ContactT = {
    title: '+7 (777) 707 87 77',
    link: '+7 (777) 707 87 77'
}

export const instagramData: ContactT = {
    link: 'https://www.instagram.com/',
    icon: InstagramIcon
}

export const youtubeData: ContactT = {
    link: 'https://www.youtube.com/',
    icon: YouTubeIcon
}

export const facebookData: ContactT = {
    link: 'https://ru-ru.facebook.com/',
    icon: FacebookIcon
}
