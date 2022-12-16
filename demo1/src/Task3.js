//3. Sorting triangles
// Print the triangles in descending order of their area.
// Input parameters: array of triangle objects
// Output: ordered array of triangle names

// Note:
// • Calculation of the area of a triangle should be made according to Heron's formula.
// • Each triangle is defined by vertex names and the lengths of its sides.
// • The application must handle floating point input:

const triangles = [
    { vertices: 'ABC', a: 10, b: 20, c: 22.36 },
    { vertices: 'TED', a: 10, b: 20, c: 22.2 }
]

export const SortingTriangles = (tri) => {
    let arr = [];
    for (const item of tri) {
        let s = (item.a + item.b + item.c) / 2;
        let area = Math.sqrt(s * ((s - item.a) * (s - item.b) * (s - item.c)));
        item.area = area;
    }

    const orderedTriangles = tri.sort((triangleA, triangleB) => triangleB.area - triangleA.area);
    for (const bigger of orderedTriangles) {
        arr.push(bigger.vertices);
    }
    return arr;
}

// console.log(SortingTriangles(triangles));