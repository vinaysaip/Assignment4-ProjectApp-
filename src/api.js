const users = [
  "upaharika",
  "ruchamahabal",
  "rishav-sah",
  "vinaysaip",
  "Pratik33",
  "shubhamyadav30",
  "ShailendraSinghRaikwar",
  "abhishekps782",
  "mojahidhd",
  "taj0598",
];

export const git_Info = () =>
  Promise.all(
    users.map(async (userName) => {
      return (await fetch(`https://api.github.com/users/${userName}`)).json();
    })
  );
