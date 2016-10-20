class SettingsController {

    /*@ngInject;*/
    constructor() {

        this.data = {
            dataset: [
                {x: 0, y: 0, val_2: 5},
                {x: 1, y: 0.993, val_2: 8.46},
                {x: 2, y: 4.947, val_2: 13.981},
                {x: 3, y: 7.823, val_2: 14.608},
                {x: 4, y: 6.587, val_2: 13.132},
                {x: 5, y: 3.207, val_2: 11.117},
                {x: 6, y: 6.66,  val_2: 11.638},
                {x: 7, y: 3.927, val_2: 11.638},
                {x: 8, y: 7.998, val_2: 11.638},
                {x: 9, y: 4.869, val_2: 11.591},
                {x: 10, y: 2.546, val_2: 10.191},
                {x: 11, y: 2.042, val_2: 8.673},
                {x: 12, y: 3.377, val_2: 9.905},
                {x: 13, y: 2.578, val_2: 14.978}
            ]
        };

        this.options= {
            axes: {
                x: {
                    key: "x"
                }
            },
            tooltipHook: function(d){
                return {
                    abscissas: "Foo",
                    rows:  d.map(function(s){
                        return {
                            label: "My label: " + s.series.label,
                            value: s.row.y1,
                            color: s.series.color,
                            id: s.series.id
                        }
                    })
                }
            },
            symbols: [
                {
                    type: 'hline',
                    value: 8.5,
                    color: 'grey',
                    axis: 'y'
                }
            ],
            series: [
                {
                    dataset: "dataset",
                    key: 'val_2',
                    label: 'Impact',
                    type: ['line'],
                    color: "rgb(126, 181, 63)",
                    interpolation: {mode: 'cardinal', tension: 0.6}
                },
                {
                    dataset: "dataset",
                    key: 'y',
                    type: ['line'],
                    label: 'Temperature',
                    color: "rgb(200, 96, 69)",
                    interpolation: {mode: 'cardinal', tension: 0.6}
                }
            ]
        };
    }

}

export default SettingsController;