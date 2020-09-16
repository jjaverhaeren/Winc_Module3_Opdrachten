const tellFortune = function (
  numberOfChildren,
  partnerName,
  geographicLocation,
  JobTitle
) {
  console.log(
    `You will be a ${JobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
  );
};

tellFortune(4, "Saskia", "Zaandam", "Developer");
tellFortune(12, "Saskia", "Limburg", "Front-end developer");
tellFortune(4, "Saskia", "New Zealand", "Entrepreneur");
