const data = [
  {
    id: 1,
    linkId: null,
    linkPrecedence: "primary",
    email: "amedhurst0@sbwire.com",
    phoneNumber: "669-460-1430",
  },
  {
    id: 2,
    linkId: null,
    linkPrecedence: "primary",
    email: "jairth1@phoca.cz",
    phoneNumber: "888-182-4417",
  },
  {
    id: 3,
    linkId: 1,
    email: "amedhurst0@sbwire.com",
    phoneNumber: "732-746-2413",
  },
  {
    id: 4,
    linkId: null,
    linkPrecedence: "primary",
    email: "lsaul2@woothemes.com",
    phoneNumber: "929-556-0477",
  },
  {
    id: 5,
    linkId: 1,
    email: "amedhurst0@sbwire.com",
    phoneNumber: "966-672-7643",
  },
  {
    id: 6,
    linkId: null,
    linkPrecedence: "primary",
    email: "dpontin3@google.ru",
    phoneNumber: "341-929-0248",
  },
  {
    id: 7,
    linkId: 2,
    email: "jairth1@phoca.cz",
    phoneNumber: "406-100-3393",
  },
  {
    id: 8,
    linkId: null,
    linkPrecedence: "primary",
    email: "meyeington8@newsvine.com",
    phoneNumber: "103-994-9998",
  },
  {
    id: 9,
    linkId: 2,
    email: "asarle9@naver.com",
    phoneNumber: "888-182-4417",
  },
  {
    id: 10,
    linkId: 1,
    email: "ylazareb@google.com",
    phoneNumber: "669-460-1430",
  },
  {
    id: 11,
    linkId: 3,
    email: "mchidlerd@cdbaby.com",
    phoneNumber: "732-746-2413",
  },
  {
    id: 12,
    linkId: 2,
    email: "lbrockley7@weibo.com",
    phoneNumber: "888-182-4417",
  },
  {
    id: 13,
    linkId: 4,
    email: "sgommesc@sciencedirect.com",
    phoneNumber: "929-556-0477",
  },
  {
    id: 14,
    linkId: 5,
    email: "mdronsfield5@discovery.com",
    phoneNumber: "966-672-7643",
  },
  {
    id: 15,
    linkId: 6,
    email: "dpontin3@google.ru",
    phoneNumber: "305-914-9029",
  },
  {
    id: 16,
    linkId: 7,
    email: "amactrustrie6@jimdo.com",
    phoneNumber: "406-100-3393",
  },
];
function generateAdjacencyList(data) {
  const adjacencyList = {};
  const idNodeDetailsMap = new Map();

  for (const node of data) {
    const id = node.id;
    const linkId = node.linkId;
    idNodeDetailsMap.set(id, node);

    if (linkId !== null) {
      if (!adjacencyList[id]) {
        adjacencyList[id] = [];
      }
      if (!adjacencyList[linkId]) {
        adjacencyList[linkId] = [];
      }

      adjacencyList[id].push(linkId);
      adjacencyList[linkId].push(id);
    }
  }

  console.log(adjacencyList);
  return { adjacencyList, idNodeDetailsMap };
}

const findCommonContacts = () => {};

const main = (startNode) => {
  let primaryContatctId = null,
    secondaryContactIds = [],
    phoneNumbers = new Set(),
    emails = new Set();
  function dfs(node) {
    const nodeInfo = idNodeDetailsMapV2.get(node);
    if (!visited.has(node)) {
      if (nodeInfo.linkId === null) {
        primaryContatctId = nodeInfo.id;
      } else {
        emails.add(nodeInfo.email);
        phoneNumbers.add(nodeInfo.phoneNumber);
        secondaryContactIds.push(nodeInfo.id);
      }
    }
    visited.add(node);
    result.push(node);
    console.log("Visited node:", node);

    // const neighbors = adjacencyList[node];
    const linkIdNeighbours = data.filter((it) => it.linkId === node);
    linkIdNeighbours.forEach((node) => idNodeDetailsMapV2.set(node.id, node));
    const idNeighbours = data.filter((it) => it.id === node);
    idNeighbours.forEach((node) => idNodeDetailsMapV2.set(node.id, node));
    const neighbors = [
      ...linkIdNeighbours.map((it) => it.id),
      ...idNeighbours.filter((it) => it.linkId !== null).map((it) => it.linkId),
    ].filter((neighbor) => !visited.has(neighbor));
    if (neighbors) {
      for (const neighbor of neighbors) {
        dfs(neighbor);
      }
    }
  }
  const visited = new Set();
  const result = [];
  const { adjacencyList, idNodeDetailsMap } = generateAdjacencyList(data);
  const seedData = [1, 11];
  const idNodeDetailsMapV2 = new Map();
  for (let seedNode of seedData) {
    const details = data.filter((it) => it.id === seedNode)[0];
    idNodeDetailsMapV2.set(seedNode, details);
  }
  for (let node of seedData) {
    dfs(node);
  }
  const primaryNode = idNodeDetailsMap.get(primaryContatctId);
  emails.delete(primaryNode.email);
  phoneNumbers.delete(primaryNode.phoneNumber);
  const emailsList = [primaryNode.email, ...emails];
  const phoneNumbersList = [primaryNode.phoneNumber, ...phoneNumbers];
  console.log(
    secondaryContactIds,
    emailsList,
    phoneNumbersList,
    primaryContatctId
  );
};
main(11);
