import type { CodegenConfig } from '@graphql-codegen/cli'

const schema = process.env.GRAPHQL_SCHEMA ?? 'schema.json'

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema,
  documents: ['src/shared/graphql/**/*.graphql', 'src/features/**/*.graphql'],
  generates: {
    'src/__generated__output.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        enumsAsTypes: true
      }
    },
    'schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
