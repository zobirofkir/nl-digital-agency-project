<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', User::count())
                ->description('Registered users')
                ->descriptionIcon('heroicon-m-users')
                ->color('success'),
            
            Stat::make('Total Blogs', Blog::count())
                ->description('Published articles')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('info'),
            
            Stat::make('Total Projects', Project::count())
                ->description('Completed projects')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('warning'),
            
            Stat::make('Total Services', Service::count())
                ->description('Available services')
                ->descriptionIcon('heroicon-m-cog-6-tooth')
                ->color('primary'),
        ];
    }
}