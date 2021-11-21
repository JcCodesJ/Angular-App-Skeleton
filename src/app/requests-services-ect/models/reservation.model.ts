export interface Reservation {
  id: number,
  checkin: Date,
  checkout: Date,
  client: {
    username: string,
    firstName: string,
    lastName: string,
    tel: string,
    paymentMethod: string[]
  },
  room: {
    roomNumber: number,
    nmbrAccomodated: number,
    type: string,
    price: number
  }
}
