import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubHeatmap = () => {
    return (
        <div className="w-full mt-8 md:mt-10 flex flex-col items-center md:items-start z-10">
            <h3 className="text-sm md:text-base font-semibold text-gray-400 mb-3 md:mb-4 uppercase tracking-wider">
                GitHub Contributions
            </h3>
            {/* Scrollable container — allows horizontal scroll on all narrow screens */}
            <div className="w-full overflow-x-auto overflow-y-hidden pb-3 custom-scrollbar">
                <div className="pr-2 pl-1 pt-1 opacity-90 transition-opacity hover:opacity-100" style={{ minWidth: 'max-content' }}>
                    <GitHubCalendar
                        username="amankumar-source"
                        colorScheme="dark"
                        fontSize={11}
                        blockSize={11}
                        blockMargin={3}
                        hideColorLegend={false}
                        hideTotalCount={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubHeatmap;
