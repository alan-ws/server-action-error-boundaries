'use server'

const forcesuccess = () => console.log('success')
const forcefail = () => { console.log('fail'); throw new Error('this is an error') }

export async function actionsuccess() {
    try {
        forcesuccess()
        return { message: "submit succeed" };
    } catch (e) {
        return { message: "submit failed" };
    }
}

export async function actionfail() {
    try {
        forcefail()
        return { message: "submit succeed" };
    } catch (e) {
        return { message: "submit failed" };
    }
}
