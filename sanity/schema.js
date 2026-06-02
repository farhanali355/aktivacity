import { post } from './schemas/post'
import { service } from './schemas/service'
import { homePage } from './schemas/homePage'
import { servicePage } from './schemas/servicePage'
import { 
  heroBlock, introBlock, aboutBlock, serviceBlock, caseStudyBlock, 
  testimonialBlock, faqBlock, textSliderBlock, blogBlock, teamBlock, 
  videowatchBlock, contactCtaBlock, serviceHeroBlock, serviceListBlock,
  resultsBridgeBlock, statsBlock, marqueeBlock, industryListBlock, stepsBlock
} from './schemas/blocks'
import serviceWebApp from './schemas/serviceWebApp'

export const schema = {
  types: [
    post, service, homePage, servicePage, heroBlock, introBlock, aboutBlock, 
    serviceBlock, caseStudyBlock, testimonialBlock, faqBlock, textSliderBlock, 
    blogBlock, teamBlock, videowatchBlock, contactCtaBlock, serviceHeroBlock, 
    serviceListBlock, resultsBridgeBlock, statsBlock, marqueeBlock, 
    industryListBlock, stepsBlock, serviceWebApp
  ],
}
