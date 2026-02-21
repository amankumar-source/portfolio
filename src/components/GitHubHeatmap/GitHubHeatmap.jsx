import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubHeatmap = () => {
    return (
        <div className="w-full max-w-[95vw] lg:max-w-full mt-10 flex flex-col items-center md:items-start z-10 overflow-hidden">
            <h3 className="text-base font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                GitHub Contributions
            </h3>
            {/* Scrollable container for mobile */}
            <div className="w-full overflow-x-auto overflow-y-hidden pb-3 custom-scrollbar">
                <div className="min-w-[800px] sm:min-w-max pr-2 pl-1 pt-1 opacity-90 transition-opacity hover:opacity-100">
                    <GitHubCalendar
                        username="amankumar-source"
                        colorScheme="dark"
                        fontSize={13}
                        blockSize={13}
                        blockMargin={4}
                        hideColorLegend={false}
                        hideTotalCount={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubHeatmap;
