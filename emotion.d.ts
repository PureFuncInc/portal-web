import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      secondary: string
      text: string
      lightText: string
      border: string
      shadow: string
      background: string
    }
    background: {
      body: string
      plain: string
      gradient: string
      primary: string
    }
    size: {
      great: string
      greater: string
      greatest: string
      little: string
      littler: string
      littlest: string
    }
    image: {
      logo: string
    }
    breakpoint: {
      phone: string
      tablet: string
      desktop: string
    }
  }
}
