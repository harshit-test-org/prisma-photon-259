import { Photon } from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const userTest = await photon.userTests.findOne({
    where: {
      id: 'Example',
    },
    select: {
      id: true,
      globalConfiguration: {
        select: {
          accounts: {
            select: {
              config: {
                select: {
                  list: true,
                  data: true,
                },
              },
            },
          },
        },
      },
    },
  })
  console.log(userTest)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
