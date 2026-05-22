import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsAccount } from "@/screens/settings/SettingsAccount"
import { SettingsPreferences } from "@/screens/settings/SettingsPreferences"
import { SettingsProfile } from "@/screens/settings/SettingsProfile"

export function Settings() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Tabs defaultValue="profile" className="flex flex-col gap-4">
        <TabsList className="self-start">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <Card>
          <CardContent>
            <TabsContent value="profile">
              <SettingsProfile />
            </TabsContent>
            <TabsContent value="account">
              <SettingsAccount />
            </TabsContent>
            <TabsContent value="preferences">
              <SettingsPreferences />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
