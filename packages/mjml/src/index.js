import mjml2html, { registerComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

import { Social, SocialElement } from 'mjml-social'
import { Navbar, NavbarLink } from 'mjml-navbar'
import { Carousel, CarouselImage } from 'mjml-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion'

import MjmlBody from 'mjml-body'
import MjmlHead from 'mjml-head'
import MjmlHeadAttributes from 'mjml-head-attributes'
import MjmlHeadBreakpoint from 'mjml-head-breakpoint'
import MjmlHeadFont from 'mjml-head-font'
import MjmlHeadPreview from 'mjml-head-preview'
import MjmlHeadStyle from 'mjml-head-style'
import MjmlHeadTitle from 'mjml-head-title'
import MjmlHero from 'mjml-hero'
import MjmlButton from 'mjml-button'
import MjmlColumn from 'mjml-column'
import MjmlDivider from 'mjml-divider'
import MjmlGroup from 'mjml-group'
import MjmlImage from 'mjml-image'

import MjmlRaw from 'mjml-raw'
import MjmlSection from 'mjml-section'
import MjmlSpacer from 'mjml-spacer'
import MjmlText from 'mjml-text'
import MjmlTable from 'mjml-table'
import MjmlWrapper from 'mjml-wrapper'

import dependencies from './dependencies'

console.log('MjmlBody', MjmlBody)

registerComponent(MjmlBody)
registerComponent(MjmlHead)
registerComponent(MjmlHeadAttributes)
registerComponent(MjmlHeadBreakpoint)
registerComponent(MjmlHeadFont)
registerComponent(MjmlHeadPreview)
registerComponent(MjmlHeadStyle)
registerComponent(MjmlHeadTitle)
registerComponent(MjmlHero)
registerComponent(MjmlButton)
registerComponent(MjmlColumn)
registerComponent(MjmlDivider)
registerComponent(MjmlGroup)
registerComponent(MjmlImage)

registerComponent(MjmlRaw)
registerComponent(MjmlSection)
registerComponent(MjmlSpacer)
registerComponent(MjmlText)
registerComponent(MjmlTable)
registerComponent(MjmlWrapper)

registerComponent(Social)
registerComponent(SocialElement)
registerComponent(Navbar)
registerComponent(NavbarLink)
registerComponent(Accordion)
registerComponent(AccordionElement)
registerComponent(AccordionText)
registerComponent(AccordionTitle)
registerComponent(Carousel)
registerComponent(CarouselImage)

registerDependencies(dependencies)

export default mjml2html
