import {Component} from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render any custom fallback UI
            return <section className="pt-32 bg-[url('../public/assets/bg1.png')] min-h-screen">
                <div className="py-16">
                    <h1 className="text-6xl text-center pt-16 font-bold opacity-80">Ops! Something went wrong!</h1>
                    <div className="text-2xl text-center py-10">The data you are looking for failed to load. Kindly
                        check
                        again after a few moment.
                    </div>
                </div>
            </section>
        }

        return this.props.children;
    }
}
