async function getLanguages(userRepositories) {
    const languagesPromises = await Promise.all(
      userRepositories.map(async (repo) => {
        const languagesUrl = repo.languages_url;
        const response = await fetch(languagesUrl);
  
        const json = await response.json();
  
        return json;
      })
    );
    const filteredLanguages = languagesPromises.map((objeto) =>
      Object.keys(objeto)
    ); 
    let mainLanguage = filteredLanguages.map((array) => array[0]); 
    mainLanguage = mainLanguage.map((language) => {
      if (language === undefined) {
        return "No language";
      }
      return language;
    });
    return mainLanguage;
  }
  export { getLanguages };