'use client'

import Form from "./_components"
import action from "./_server_action"

export default function Page() {
  return <Form action={action} />
}
