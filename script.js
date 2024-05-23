document.getElementById('path-select').addEventListener('change', function() {
    var paths = {
        'A-D': ['line-DA'],
        'A-B': ['line-BA'],
        'A-C': ['line-CA'],
        'D-A': ['line-DA']
    };

    // Remove highlight from all lines
    document.querySelectorAll('line').forEach(function(line) {
        line.classList.remove('highlight');
    });

    // Highlight the selected path
    var selectedPath = this.value;
    if (selectedPath in paths) {
        paths[selectedPath].forEach(function(lineId) {
            document.getElementById(lineId).classList.add('highlight');
        });
    }
});
