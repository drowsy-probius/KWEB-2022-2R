
export function randomHexString(length=32)
{
  let characters = "0123456789abcdef"
  let str = ""
  for(let i = 0; i < length; i++){
      str += characters[Math.floor(Math.random() * 16)]
  }
  return str;
}


export function randomSeed() 
{
  return `${Date.now()}${Math.random() * 100}`;
}

export async function randomUserData(users=1) {
  try 
  {
    const res = await fetch(`https://randomuser.me/api/?results=${users}&seed=${randomSeed()}`, {
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
    console.error(`randomUserData`, err);
    return {
      "gender":"male",
      "name":{"title":"Mr","first":"Diy","last":"Nechiporuk"},
      "location":{
        "street":{"number":2002,"name":"Postisheva"},
        "city":"Pomichna",
        "state":"Odeska",
        "country":"Ukraine",
        "postcode":80673,
        "coordinates":{"latitude":"74.6090","longitude":"-55.5413"},
        "timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}
      },
      "email":"diy.nechiporuk@example.com",
      "login":{
        "uuid":"59d3bb9c-005f-4571-9226-a2b8cc34c762",
        "username":"blackgorilla682",
        "password":"beavis1",
        "salt":"cdw9wDfw",
        "md5":"1bd05ea34b45710bacf4cc62328d4c97",
        "sha1":"e0b57068069ea4c0d5ae7161c66046ac956e545d",
        "sha256":"08c4adf4dde1799f1c1a8271c30fb674fd8e4c2e05655c2766aba446cc458c0f"
      },
      "dob":{"date":"1952-12-30T22:43:35.865Z","age":69},
      "registered":{"date":"2016-12-08T01:19:37.380Z","age":5},
      "phone":"(098) T22-7441",
      "cell":"(066) F99-7460",
      "id":{"name":"","value":null},
      "picture":{
        "large":"https://randomuser.me/api/portraits/men/50.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/50.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"
      },
      "nat":"UA"
    };
  }
}

export function randomImageUrl(size=256) {
  return `https://picsum.photos/${size}?seed=${randomSeed()}`
}


/**
 * https://github.com/mcnaveen/Random-Words-API
 */
export async function randomSentence() {
  const endpoint = ["question", "sentence"][parseInt(Math.random() * 2)];

  try 
  {
    const res = await fetch(`https://random-words-api.vercel.app/word/${endpoint}?seed=${randomSeed()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await res.json();
    return json[0].word;
  }
  catch(err)
  {
    console.error(`randomSentence`, err);
    return "At that moment she realized she had a sixth sense.";
  }
}

export async function randomParagraph() {
  try 
  {
    const res = await fetch(`https://random-words-api.vercel.app/word/paragraph?seed=${randomSeed()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await res.json();
    return json[0].definition;
  }
  catch(err)
  {
    console.error(`randomParagraph`, err);
    return "It was a concerning development that he couldn't get out of his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.";
  }
}


export async function randomUsername() {
  const wordCount = parseInt(Math.random() * 2) + 1;

  try 
  {
    const res = await fetch(`https://random-word-api.herokuapp.com/word?number=${wordCount}`);
    const wordList = await res.json();
    return wordList.join("");
  }
  catch(err)
  {
    console.error(`randomUsername`, err);
    return "johnDoe";
  }
}

export async function randomPost(user, likeMax=5000,) {
  try 
  {
    const post = {
      id: randomHexString(),
      images: Array.apply(null, Array(parseInt(Math.random() * 5) + 1)).map(i => randomImageUrl(size=512)),
      user: user,
      likes: parseInt(Math.random() * likeMax) + 1,
      caption: (await randomParagraph()) ?? "",
      comments: await Promise.all(Array.apply(null, Array(parseInt(Math.random() * 3) + 1)).map(async (i) => {
        return {
          user: (await randomUsername()) ?? "johnDoe",
          comment: (await randomSentence()) ?? "dummy comment",
        }
      })),
    };
    return post;
  }
  catch(err)
  {
    console.error(`randomPost`, err);
    return {
      id: randomHexString(),
      images: [`https://picsum.photos/512`],
      user: user,
      likes: parseInt(Math.random() * likeMax) + 1,
      caption: "dummy contents",
      comments: [
        {
          user: "dummyUser",
          comment: "dummy Comment",
        }
      ],
    };
  }
}