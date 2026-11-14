/* Display numbers follow the requested structure; source banks keep their original files. */
(function () {
    'use strict';
    const sourceDatabase = window.database || {};
    const sourceExtras = window.extraDatabase || window.additionalDatabase || {};
    const database = {};
    const extras = {};
    const roster = [
        ...Array.from({length: 5}, (_, i) => ({number: i + 1, source: `task${i + 1}`})),
        {number: 6, source: 'task7'},
        {number: 7, source: 'task8'},
        {number: 8, source: 'task9'},
        {number: 9, source: 'task10'},
        {number: 10, source: 'task11'},
        {number: 11, source: 'task12'},
        {number: 12, source: 'archive', title: 'Задание 12. Исследование функций'},
        {number: 13, source: 'task14'},
        {number: 14, source: 'task15'},
        {number: 15, source: 'task16'},
        {number: 16, source: 'task18'},
        {number: 17, source: 'task13'},
        {number: 18, source: 'task19'},
        {number: 19, source: 'task20'}
    ];

    function findSource(db, source) {
        return db[source] || (source === 'archive' ? null : db[Number(source.replace(/\D/g, ''))]);
    }

    function mapBank(data, entry, archived, extra) {
        if (!data || !Array.isArray(data.prototypes)) return null;
        const sourceNumber = Number(entry.source.replace(/\D/g, '')) || 12;
        const part = archived ? Number(data.part || 1) : (entry.number >= 13 ? 2 : 1);
        const title = extra ? data.title : archived ? `Архив. ${data.title}` :
            (entry.title || data.title.replace(/Задание\s+\d+/, `Задание ${entry.number}`));
        return {
            ...data, title, part, isArchive: archived,
            examNumber: entry.number, sourceTaskId: entry.source,
            prototypes: data.prototypes.map(original => {
                const prototype = {...original};
                if (!archived && sourceNumber !== entry.number) {
                    if (prototype.code) prototype.code = String(prototype.code)
                        .replace(new RegExp(`^${sourceNumber}(?=[.:])`), String(entry.number));
                    for (const key of ['desc', 'short_desc', 'label', 'title', 'name']) {
                        if (typeof prototype[key] === 'string') prototype[key] = prototype[key]
                            .replace(new RegExp(`^((?:Прототип|Тип|Задание)\\s*№?\\s*)${sourceNumber}(?=[.:\\s])`, 'i'), (_, prefix) => prefix + entry.number);
                    }
                }
                if (!archived && entry.source === 'task13') {
                    delete prototype.theory_task;
                    delete prototype.theory_sol;
                }
                return prototype;
            })
        };
    }

    for (const entry of roster) {
        const bank = mapBank(findSource(sourceDatabase, entry.source), entry, false, false);
        if (bank) database[`task${entry.number}`] = database[entry.number] = bank;
        const extra = mapBank(findSource(sourceExtras, entry.source), entry, false, true);
        if (extra) extras[`task${entry.number}`] = extras[entry.number] = extra;
    }
    for (const number of [6, 17]) {
        const entry = {number, source: `task${number}`};
        const key = `archive_task${number}`;
        const bank = mapBank(findSource(sourceDatabase, entry.source), entry, true, false);
        if (bank) database[key] = bank;
        const extra = mapBank(findSource(sourceExtras, entry.source), entry, true, true);
        if (extra) extras[key] = extra;
    }
    window.database = database;
    window.extraDatabase = extras;
    if (window.additionalDatabase === sourceExtras) window.additionalDatabase = extras;
    window.egeExamStructure = Object.freeze({
        taskCount: roster.length,
        firstPartLast: 12,
        secondPartFirst: 13,
        activeTaskIds: Object.freeze(roster.map(entry => `task${entry.number}`))
    });
})();
