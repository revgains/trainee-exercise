const getTemp = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Nestor&units=metric&appid=4688d3a5c9a93ea31e57157acaf02fe4`
);

// Test for api connection to return 200
describe("expect API 200 OK", () => {
    it("should get status 200", () => {
        return getTemp.then(data => {
            expect(data.status).toBe(200);
        });
    });
});
