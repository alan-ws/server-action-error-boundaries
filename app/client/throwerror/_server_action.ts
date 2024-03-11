'use server'

export default async function action() {
    console.log('from client page')
    throw new Error('server action on client page')
}
