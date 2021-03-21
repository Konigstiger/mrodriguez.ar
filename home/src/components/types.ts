// for review
export enum StreamState {
    Disconnected,
    Starting,
    Started,
    Stopping,
    StartingError,
    StoppingError,
    Error,
  }

  // for review
  export const ActiveStatuses = [StreamState.Started, StreamState.Stopping]
  export const InactiveStatuses = [StreamState.Disconnected, StreamState.Starting]
  
  // our code
  export enum Countries {
    AR,
    US,
  }

 export default interface IStock{
     id: string
     ticker: string
     company: string
     country: Countries
 } 
