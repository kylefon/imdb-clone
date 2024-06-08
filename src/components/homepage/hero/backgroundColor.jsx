export default function BackgroundColor({ dominantColor, slideIndex }) {
    // Filter out consecutive duplicates from the dominant color array
    const filteredColors = dominantColor.filter((color, index) => {
        // If it's the first color or the current color is different from the previous one, keep it
        return index === 0 || color !== dominantColor[index - 1];
    });

    // Use the filtered color array to get the color for the current slide index
    const backgroundColor = filteredColors[slideIndex];

    return (
        <div className="absolute w-full h-full top-2 -z-10 flex items-center justify-center p-3 rounded-lg">
            <div className="text-h1 w-full h-full filter blur-3xl flex justify-center" style={{ backgroundColor, opacity: 0.28 }}>
            </div>
        </div>
    );
}