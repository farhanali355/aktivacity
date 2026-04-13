import { post } from './schemas/post'
import { service } from './schemas/service'
import { homePage } from './schemas/homePage'
import { heroBlock, introBlock, aboutBlock, serviceBlock, caseStudyBlock, testimonialBlock, faqBlock, textSliderBlock } from './schemas/blocks'
import serviceWebApp from './schemas/serviceWebApp'

export const schema = {
  types: [post, service, homePage, heroBlock, introBlock, aboutBlock, serviceBlock, caseStudyBlock, testimonialBlock, faqBlock, textSliderBlock, serviceWebApp],
}
