function filterData(value: string, data: any) {
    const theData = data;
    return theData.filter((d: { email: string, first_name: string, last_name: string, id: string }) => {

        return d.email.toLowerCase().includes(value.toLowerCase()) ||
            d.first_name.toLowerCase().includes(value.toLowerCase()) ||
            d.last_name.toLowerCase().includes(value.toLowerCase()) ||
            d.id
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase());

    });

}

function compareFunction() {

}
export { filterData, compareFunction }