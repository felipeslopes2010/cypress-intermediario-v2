import { faker } from '@faker-js/faker'

describe('Testa Git Clone pelo CLI', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.api_createProject(project)
  })

  it('Clona repositório com Sucesso', () => {
    cy.cloneViaSSH(project)

    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})