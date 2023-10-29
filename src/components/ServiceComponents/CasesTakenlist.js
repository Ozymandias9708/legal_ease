const data = {name: 'Vinit', case:'Land Issue',status: 'Completed',start: new Date(Date.now()).toDateString()}

export const CasesTakenlist = [
    ...Array(20).fill({...data, status: 'Active'}),
    ...Array(5).fill({...data})
];