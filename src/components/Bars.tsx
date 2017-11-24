import * as React from 'react';

export interface Percentage {

}

export namespace BarWidgetContainer {
    export interface Props {
        questionId: number
    }

    export interface State {
        data: Percentage[]
    }
}

export default class BarWidgetContainer extends React.Component<BarWidgetContainer.Props, BarWidgetContainer.State> {
    componentDidMount() {

    }
    render() {
        const { children } = this.props
        const {} = this.state
        return (
            <div>
                {groups.map((g, i) => (
                    <div
                        key={g.x + '-' + g.y}
                        style={{}}>
                        <div style={{ width: '50%' }}>
                        </div>
                ))}
            </div>
        )
    }
}