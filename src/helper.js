export function formateMovieLength(length) {
    const min = Number(length.split(" ").at(0));
    const hh = Math.round(min / 60);
    const mn = min % 60;
    return `${hh}h ${mn}m`;
}
export default { formateMovieLength };
