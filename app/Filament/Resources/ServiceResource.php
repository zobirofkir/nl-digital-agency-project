<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServiceResource\Pages;
use App\Models\Service;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static ?string $navigationGroup = 'Services';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations du Service')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                        
                        Forms\Components\Select::make('icon')
                            ->label('Icône')
                            ->options([
                                'FaRocket' => 'Rocket', 'FaMobile' => 'Mobile', 'FaBullseye' => 'Bullseye', 'FaPaintBrush' => 'Paint Brush', 'FaShoppingCart' => 'Shopping Cart', 'FaCloud' => 'Cloud', 'FaCog' => 'Cog', 'FaCamera' => 'Camera', 'FaCode' => 'Code', 'FaDesktop' => 'Desktop', 'FaLaptop' => 'Laptop', 'FaTablet' => 'Tablet', 'FaDatabase' => 'Database', 'FaServer' => 'Server', 'FaWifi' => 'Wifi', 'FaGlobe' => 'Globe', 'FaSearch' => 'Search', 'FaChartLine' => 'Chart Line', 'FaChartBar' => 'Chart Bar', 'FaChartPie' => 'Chart Pie', 'FaUsers' => 'Users', 'FaUser' => 'User', 'FaUserTie' => 'User Tie', 'FaHandshake' => 'Handshake', 'FaLightbulb' => 'Lightbulb', 'FaTools' => 'Tools', 'FaWrench' => 'Wrench', 'FaHammer' => 'Hammer', 'FaCube' => 'Cube', 'FaCubes' => 'Cubes', 'FaBox' => 'Box', 'FaBoxes' => 'Boxes', 'FaShield' => 'Shield', 'FaLock' => 'Lock', 'FaKey' => 'Key', 'FaEye' => 'Eye', 'FaHeart' => 'Heart', 'FaStar' => 'Star', 'FaThumbsUp' => 'Thumbs Up', 'FaAward' => 'Award', 'FaTrophy' => 'Trophy', 'FaMedal' => 'Medal', 'FaGift' => 'Gift', 'FaGamepad' => 'Gamepad', 'FaMusic' => 'Music', 'FaVideo' => 'Video', 'FaPlay' => 'Play', 'FaPause' => 'Pause', 'FaStop' => 'Stop', 'FaForward' => 'Forward', 'FaBackward' => 'Backward', 'FaVolumeUp' => 'Volume Up', 'FaVolumeDown' => 'Volume Down', 'FaVolumeMute' => 'Volume Mute', 'FaHeadphones' => 'Headphones', 'FaMicrophone' => 'Microphone', 'FaPhone' => 'Phone', 'FaEnvelope' => 'Envelope', 'FaComment' => 'Comment', 'FaComments' => 'Comments', 'FaShare' => 'Share', 'FaLink' => 'Link', 'FaDownload' => 'Download', 'FaUpload' => 'Upload', 'FaFile' => 'File', 'FaFolder' => 'Folder', 'FaImage' => 'Image', 'FaImages' => 'Images', 'FaFilm' => 'Film', 'FaNewspaper' => 'Newspaper', 'FaBook' => 'Book', 'FaBookOpen' => 'Book Open', 'FaGraduationCap' => 'Graduation Cap', 'FaSchool' => 'School', 'FaUniversity' => 'University', 'FaBuilding' => 'Building', 'FaHome' => 'Home', 'FaStore' => 'Store', 'FaWarehouse' => 'Warehouse', 'FaIndustry' => 'Industry', 'FaCar' => 'Car', 'FaTruck' => 'Truck', 'FaPlane' => 'Plane', 'FaShip' => 'Ship', 'FaTrain' => 'Train', 'FaBicycle' => 'Bicycle', 'FaMotorcycle' => 'Motorcycle', 'FaMapMarker' => 'Map Marker', 'FaMap' => 'Map', 'FaCompass' => 'Compass', 'FaRoute' => 'Route', 'FaClock' => 'Clock', 'FaCalendar' => 'Calendar', 'FaBell' => 'Bell', 'FaFlag' => 'Flag', 'FaBookmark' => 'Bookmark', 'FaTag' => 'Tag', 'FaTags' => 'Tags', 'FaClipboard' => 'Clipboard', 'FaList' => 'List', 'FaCheck' => 'Check', 'FaTimes' => 'Times', 'FaPlus' => 'Plus', 'FaMinus' => 'Minus', 'FaDollarSign' => 'Dollar Sign', 'FaEuroSign' => 'Euro Sign', 'FaPoundSign' => 'Pound Sign', 'FaYenSign' => 'Yen Sign', 'FaCalculator' => 'Calculator', 'FaCreditCard' => 'Credit Card', 'FaWallet' => 'Wallet', 'FaPiggyBank' => 'Piggy Bank', 'FaCoins' => 'Coins', 'FaMoneyBill' => 'Money Bill', 'FaReceipt' => 'Receipt', 'FaShoppingBag' => 'Shopping Bag', 'FaShoppingBasket' => 'Shopping Basket', 'FaCashRegister' => 'Cash Register', 'FaHandHoldingUsd' => 'Hand Holding USD', 'FaChartArea' => 'Chart Area', 'FaProjectDiagram' => 'Project Diagram', 'FaSitemap' => 'Sitemap', 'FaNetworkWired' => 'Network Wired', 'FaRss' => 'RSS', 'FaBroadcastTower' => 'Broadcast Tower', 'FaSignal' => 'Signal', 'FaBluetooth' => 'Bluetooth', 'FaUsb' => 'USB', 'FaPlug' => 'Plug', 'FaBattery' => 'Battery', 'FaSolarPanel' => 'Solar Panel', 'FaLeaf' => 'Leaf', 'FaTree' => 'Tree', 'FaSeedling' => 'Seedling', 'FaRecycle' => 'Recycle', 'FaCoffee' => 'Coffee', 'FaBeer' => 'Beer', 'FaWineGlass' => 'Wine Glass', 'FaCocktail' => 'Cocktail', 'FaUtensils' => 'Utensils', 'FaPizza' => 'Pizza', 'FaHamburger' => 'Hamburger', 'FaApple' => 'Apple', 'FaCarrot' => 'Carrot', 'FaIceCream' => 'Ice Cream', 'FaBirthdayCake' => 'Birthday Cake', 'FaDice' => 'Dice', 'FaChess' => 'Chess', 'FaPuzzlePiece' => 'Puzzle Piece', 'FaFootballBall' => 'Football Ball', 'FaBasketballBall' => 'Basketball Ball', 'FaBaseballBall' => 'Baseball Ball', 'FaVolleyballBall' => 'Volleyball Ball', 'FaTableTennis' => 'Table Tennis', 'FaGolfBall' => 'Golf Ball', 'FaBowlingBall' => 'Bowling Ball', 'FaRunning' => 'Running', 'FaWalking' => 'Walking', 'FaSwimmer' => 'Swimming', 'FaBiking' => 'Biking', 'FaDumbbell' => 'Dumbbell', 'FaHeartbeat' => 'Heartbeat', 'FaStethoscope' => 'Stethoscope', 'FaPills' => 'Pills', 'FaSyringe' => 'Syringe', 'FaThermometer' => 'Thermometer', 'FaBandAid' => 'Band Aid', 'FaAmbulance' => 'Ambulance', 'FaHospital' => 'Hospital', 'FaUserMd' => 'Doctor', 'FaMicroscope' => 'Microscope', 'FaFlask' => 'Flask', 'FaAtom' => 'Atom', 'FaDna' => 'DNA', 'FaVirus' => 'Virus', 'FaMask' => 'Mask', 'FaFire' => 'Fire', 'FaSnowflake' => 'Snowflake', 'FaSun' => 'Sun', 'FaMoon' => 'Moon', 'FaCloudRain' => 'Cloud Rain', 'FaBolt' => 'Bolt', 'FaWind' => 'Wind', 'FaUmbrella' => 'Umbrella', 'FaRainbow' => 'Rainbow', 'FaFacebook' => 'Facebook', 'FaTwitter' => 'Twitter', 'FaInstagram' => 'Instagram', 'FaLinkedin' => 'LinkedIn', 'FaYoutube' => 'YouTube', 'FaGithub' => 'GitHub', 'FaGoogle' => 'Google', 'FaApple' => 'Apple', 'FaMicrosoft' => 'Microsoft', 'FaAmazon' => 'Amazon', 'FaReact' => 'React', 'FaAngular' => 'Angular', 'FaVuejs' => 'Vue.js', 'FaNodeJs' => 'Node.js', 'FaPython' => 'Python', 'FaPhp' => 'PHP', 'FaJava' => 'Java', 'FaJs' => 'JavaScript', 'FaHtml5' => 'HTML5', 'FaCss3' => 'CSS3', 'FaBootstrap' => 'Bootstrap', 'FaSass' => 'Sass', 'FaNpm' => 'NPM', 'FaYarn' => 'Yarn', 'FaWordpress' => 'WordPress', 'FaDrupal' => 'Drupal', 'FaShopify' => 'Shopify', 'FaLaravel' => 'Laravel', 'FaDocker' => 'Docker', 'FaAws' => 'AWS'
                            ])
                            ->required()
                            ->searchable(),
                        
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->rows(4)
                            ->columnSpanFull(),
                        
                        Forms\Components\TagsInput::make('skills')
                            ->required()
                            ->placeholder('Add skills...')
                            ->columnSpanFull(),
                        
                        Forms\Components\TextInput::make('url')
                            ->url()
                            ->placeholder('https://example.com')
                            ->columnSpanFull(),
                        
                        Forms\Components\Select::make('user_id')
                            ->label('Utilisateur')
                            ->relationship('user', 'name')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                
                Tables\Columns\TextColumn::make('icon')
                    ->badge()
                    ->color('primary'),
                
                Tables\Columns\TextColumn::make('description')
                    ->limit(50)
                    ->tooltip(function (Tables\Columns\TextColumn $column): ?string {
                        $state = $column->getState();
                        return strlen($state) > 50 ? $state : null;
                    }),
                
                Tables\Columns\TagsColumn::make('skills')
                    ->limit(3),
                
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Utilisateur')
                    ->sortable()
                    ->searchable(),
                
                Tables\Columns\IconColumn::make('url')
                    ->label('A une URL')
                    ->boolean()
                    ->trueIcon('heroicon-o-link')
                    ->falseIcon('heroicon-o-x-mark'),
                
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('user')
                    ->label('Utilisateur')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServices::route('/'),
            'create' => Pages\CreateService::route('/create'),
            'edit' => Pages\EditService::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
}
