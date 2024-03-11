export default async function Page() {
  async function action() {
    'use server'
    console.log('from server page')
    throw new Error('server action on server page')
  }

  return <form action={action}>
    <button type="submit">CLICK ME SERVER</button>
  </form>
}
