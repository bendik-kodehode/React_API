export default function formatRuntime(runtime) {
    const runtimeMinutes = parseInt(runtime);
    const hours = Math.floor(runtimeMinutes / 60)
    const minutes = runtimeMinutes % 60;

    if (minutes <= 0) return `${hours}h`;
    else if (hours <= 0) return `${minutes}m`
    else return `${hours}h ${minutes}m`
}