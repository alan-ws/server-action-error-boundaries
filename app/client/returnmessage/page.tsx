'use client'

import { FormFail, FormSuccess } from "./_components"
import { actionfail, actionsuccess } from "./_server_action"

export default function Page() {
  return <>
    <FormSuccess action={actionsuccess} />
    <br />
    <FormFail action={actionfail} />
  </>
}
