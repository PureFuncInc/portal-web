import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLine,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const socialNetworkIconMap: Record<string, IconDefinition> = {
  portal: faCompass,
  email: faEnvelope,
  youtube: faYoutube,
  facebook: faFacebook,
  github: faGithub,
  line: faLine,
  twitter: faTwitter,
  linkedin: faLinkedin,
  telegram: faTelegram,
  discord: faDiscord,
}
