# Porously Bowling Watchdogs

**Members:**

- Alex Clarke
- Jad Sbaï
- Jay Milligan
- Meyad Golmakani
- Sam Brownstone

## Pharma3:

We propose a forward-thinking prescription pipeline for the NHS with blockchain. Prescriptions are built on a need-to-know basis with ZK-Proofs, and authenticated as a three-way handshake between patient, doctor and pharmacy. Participants and drug stock remain accountable throughout the entire flow from supplier to patient.

#### Problems solved:

- Doctors cannot checkout drugs to spurious patients (prescriptions must be linked with physical/virtual appointments that were attended and confirmed by both parties)
- Prescriptions can no longer be counterfeited, used past their expiry, or used more than once.
- Sensitive medical data won’t be managed in a cleartext format, rather using cryptographic protocols afforded by the utilization of blockchain
- Realization of true authenticity within prescriptions and their involved actors/contents.
- Current centralized authorities are based on uncertifiable and unmaintained databases, with no clear mode of correspondence between supplies and prescribers of medicine.
- Facilitation of a fully digitized supply chain, where any and all actors are fully accountable when faced with forensic appraisal.


### Demo


## Tech Specs

### Tech Description

The contracts are deployed on the polygon mumbai testnet. 
Enter the following adresses in the address field on this [web interface](https://mumbai.polygonscan.com/) to visualise the transactions of each smart contract as well as their owned ERC721 tokens:

- Contract practice deployed to address: 0xE32E8a82bB4DCf9ea2E1CFEcc4d73F5245B2a39e
- Contract broker deployed to address: 0x898F37cCfd53A8dc62fbd2fbdb4F11226327388A
- Contract checkout deployed to address: 0x682476c2D3da95Ad2E99853E6C987307E1E993D6
- Contract patient deployed to address: 0x1dfbf0483b99eE5718bFf3ef5ae9b7346E4181Ee
- Contract pharmacy deployed to address: 0x3E65Ef7bEa78c1451c5b6769ad33b5E464d622Ed
- Contract prescriptionNFT deployed to address: 0x8d4431B4c4788dcACad3fAcD1431dc9201C5b15A
- Contract reservationToken deployed to address: 0x21601dd842A3Ea99406117DCF94Ea3FBfF92413D
- Contract stockAllocation deployed to address: 0x5Bcb3420340D8818f232F5bEa73a51FDAB1458e8
- Contract stockReq deployed to address: 0x5310dc4Bdb1d48619335f7f38B61AF02E1EC79E7
- Contract patientVerifier deployed to address: 0xCE73A0b914341DC3e585fB793970D8e8eDfb6e50


### Tech Stack

- Frontend: Next.js, React.js
- Backend: Polygon, Alchemy, MetaMask, HardHat, Ethers.js, Node.js, Solidity


### Significant source code dependencies:

- OpenZeppelin: *https://github.com/OpenZeppelin*
- Polygon ID tuto repo: https://github.com/0xPolygonID/tutorial-examples

