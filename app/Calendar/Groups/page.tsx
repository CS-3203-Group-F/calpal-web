import { verifySession } from "@/app/lib/dal";
import { Group } from "@/components/Group/Group";

export default async function Groups() {
  await verifySession(); // Verify user session before rendering the component, redirect to login if not authenticated

  return <Group />;
}
