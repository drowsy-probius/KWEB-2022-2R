export async function randomUserData(users=1) {
  try 
  {
    const res = await fetch(`https://randomuser.me/api/?results=${users}&seed=${Date.now()}${Math.random() * 100}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await res.json();
    return json.results;
  }
  catch(err)
  {
    console.error(err);
    return {"gender":"male","name":{"title":"Mr","first":"Diy","last":"Nechiporuk"},"location":{"street":{"number":2002,"name":"Postisheva"},"city":"Pomichna","state":"Odeska","country":"Ukraine","postcode":80673,"coordinates":{"latitude":"74.6090","longitude":"-55.5413"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"diy.nechiporuk@example.com","login":{"uuid":"59d3bb9c-005f-4571-9226-a2b8cc34c762","username":"blackgorilla682","password":"beavis1","salt":"cdw9wDfw","md5":"1bd05ea34b45710bacf4cc62328d4c97","sha1":"e0b57068069ea4c0d5ae7161c66046ac956e545d","sha256":"08c4adf4dde1799f1c1a8271c30fb674fd8e4c2e05655c2766aba446cc458c0f"},"dob":{"date":"1952-12-30T22:43:35.865Z","age":69},"registered":{"date":"2016-12-08T01:19:37.380Z","age":5},"phone":"(098) T22-7441","cell":"(066) F99-7460","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/50.jpg","medium":"https://randomuser.me/api/portraits/med/men/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"},"nat":"UA"};
  }
}

export function randomImageUrl(size=256) {
  return `https://picsum.photos/${size}?seed=${Date.now()}${Math.random() * 100}`
}