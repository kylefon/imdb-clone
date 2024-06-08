export default function BackgroundColor({ dominantColor, slideIndex }) {

    const backgroundColor = dominantColor[slideIndex];

    return (
        <div className="absolute w-full h-full top-2 -z-10 flex items-center justify-center p-3 rounded-lg">
            <div className="text-h1 w-full h-full filter blur-3xl flex justify-center" style={{ backgroundColor, opacity: 0.28 }}>
            </div>
        </div>
    );
}