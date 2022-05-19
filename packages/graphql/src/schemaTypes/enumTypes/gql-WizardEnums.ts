import { CODE_LANGUAGES } from '@packages/types'
import { WIZARD_FRAMEWORKS, WIZARD_BUNDLERS } from '@packages/scaffold-config'
import { enumType } from 'nexus'

export const SupportedBundlerEnum = enumType({
  name: 'SupportedBundlers',
  description: 'The bundlers that we can use with Cypress',
  members: WIZARD_BUNDLERS.map((t) => t.type),
})

export const FrameworkCategoryEnum = enumType({
  name: 'FrameworkCategoryEnum',
  description: 'Either library (like React.js, no overarching guidelines) or framework (like Next.js)',
  members: WIZARD_FRAMEWORKS.map((t) => t.category),
})

export const CodeGenFrameworkEnum = enumType({
  name: 'CodeGenFrameworkEnum',
  description: 'Main library behind a framework, eg Vue or React',
  members: WIZARD_FRAMEWORKS.map((t) => t.codeGenFramework),
})

export const WizardConfigFileStatusEnum = enumType({
  name: 'WizardConfigFileStatusEnum',
  members: ['changes', 'valid', 'skipped', 'error'],
})

export const FrontendFrameworkEnum = enumType({
  name: 'FrontendFrameworkEnum',
  members: WIZARD_FRAMEWORKS.map((t) => t.type),
})

export const SupportStatusEnum = enumType({
  name: 'SupportStatusEnum',
  members: ['alpha', 'beta', 'full'],
})

export const CodeLanguageEnum = enumType({
  name: 'CodeLanguageEnum',
  members: CODE_LANGUAGES.map((t) => t.type),
})

export const TestingTypeEnum = enumType({
  name: 'TestingTypeEnum',
  members: ['e2e', 'component'],
})
