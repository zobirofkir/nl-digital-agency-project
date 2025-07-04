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
            Stat::make('Total Utilisateurs', User::count())
                ->description('Utilisateurs inscrits')
                ->descriptionIcon('heroicon-m-users')
                ->color('success'),
            
            Stat::make('Total Articles', Blog::count())
                ->description('Articles publiés')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('info'),
            
            Stat::make('Total Projets', Project::count())
                ->description('Projets terminés')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('warning'),
            
            Stat::make('Total Services', Service::count())
                ->description('Services disponibles')
                ->descriptionIcon('heroicon-m-cog-6-tooth')
                ->color('primary'),
        ];
    }
}