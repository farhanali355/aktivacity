export const structure = (S) =>
  S.list()
    .title('Aktivacity Content')
    .items([
      // Main Pages (Singletons)
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      
      S.divider(),

      // Service Layouts (Categories)
      S.listItem()
        .title('Web & App Layout Pages')
        .icon(() => '💻')
        .child(
          S.documentTypeList('serviceWebApp')
            .title('Web & App Layouts')
        ),
      
      S.listItem()
        .title('Digital Marketing Layout')
        .icon(() => '📢')
        .child(
          S.documentTypeList('service') // Reusing existing 'service' or I can create new one later
            .title('Marketing Pages')
        ),

      S.divider(),

      // Other content
      ...S.documentTypeListItems().filter(
        (item) => !['homePage', 'serviceWebApp', 'service'].includes(item.getId())
      ),
    ])
