import { ApiSdk, DashboardUrl, Group } from "@bandada/api-sdk"

// Initialize Bandada API SDK.
const bandadaApi = new ApiSdk(process.env.NEXT_PUBLIC_BANDADA_API_URL)

export { DashboardUrl }

/**
 * Function to get group details by groupId.
 * @param groupId The group identifier.
 * @returns The group (if any).
 */
export async function getGroup(groupId: string): Promise<Group | null> {
  try {
    // Get group details using the Bandada API SDK.
    return await bandadaApi.getGroup(groupId)
  } catch (error: any) {
    console.error(error)

    // Handle errors and display appropriate alerts.
    if (error.response) {
      alert(error.response.statusText)
    } else {
      alert("Some error occurred!")
    }

    return null
  }
}

/**
 * Function to add a member to a group using an API key.
 * @param groupId The group identifier.
 * @param memberId The member identifier.
 * @param apiKey The admin API key.
 */
export async function addMemberByApiKey(
  groupId: string,
  memberId: string,
  apiKey: string
): Promise<void> {
  try {
    // Add a member to the group using the Bandada API SDK.
    await bandadaApi.addMemberByApiKey(groupId, memberId, apiKey)
  } catch (error: any) {
    console.error(error)

    // Handle errors and display appropriate alerts.
    if (error.response) {
      alert(error.response.statusText)
    } else {
      alert("Some error occurred!")
    }
  }
}

/**
 * Function to get members of a group by groupId.
 * @param groupId The group identifier.
 * @returns A list of members of the group (if any).
 */
export async function getMembersGroup(
  groupId: string
): Promise<string[] | null> {
  try {
    // Get group details using the Bandada API SDK.
    const group = await bandadaApi.getGroup(groupId)
    return group.members
  } catch (error: any) {
    console.error(error)

    // Handle errors and display appropriate alerts.
    if (error.response) {
      alert(error.response.statusText)
    } else {
      alert("Some error occurred!")
    }

    return null
  }
}

/**
 * Function to get the credential group join URL.
 * @param dashboardUrl The dashboard URL.
 * @param groupId The group identifier.
 * @param commitment The identity commitment.
 * @param providerName The provider name.
 * @param redirectUri The redirect URI.
 * @returns The credential group join URL.
 */
export function getCredentialGroupJoinUrl(
  dashboardUrl: DashboardUrl,
  groupId: string,
  commitment: string,
  providerName: string,
  redirectUri: string
): string | null {
  try {
    // Get credential group join URL using the Bandada API SDK.
    return bandadaApi.getCredentialGroupJoinUrl(
      dashboardUrl,
      groupId,
      commitment,
      providerName,
      redirectUri
    )
  } catch (error: any) {
    console.error(error)

    // Handle errors and display appropriate alerts.
    if (error.response) {
      alert(error.response.statusText)
    } else {
      alert("Some error occurred!")
    }

    return null
  }
}
